import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4033Component } from './my-comp-4033.component';

describe('MyComp4033Component', () => {
  let component: MyComp4033Component;
  let fixture: ComponentFixture<MyComp4033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
