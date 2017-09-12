import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4271Component } from './my-comp-4271.component';

describe('MyComp4271Component', () => {
  let component: MyComp4271Component;
  let fixture: ComponentFixture<MyComp4271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
