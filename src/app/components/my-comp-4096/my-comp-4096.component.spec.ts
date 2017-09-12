import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4096Component } from './my-comp-4096.component';

describe('MyComp4096Component', () => {
  let component: MyComp4096Component;
  let fixture: ComponentFixture<MyComp4096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
