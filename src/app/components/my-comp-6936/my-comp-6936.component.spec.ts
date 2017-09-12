import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6936Component } from './my-comp-6936.component';

describe('MyComp6936Component', () => {
  let component: MyComp6936Component;
  let fixture: ComponentFixture<MyComp6936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
