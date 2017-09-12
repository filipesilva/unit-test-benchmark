import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4984Component } from './my-comp-4984.component';

describe('MyComp4984Component', () => {
  let component: MyComp4984Component;
  let fixture: ComponentFixture<MyComp4984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
