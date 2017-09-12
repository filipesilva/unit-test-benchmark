import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6523Component } from './my-comp-6523.component';

describe('MyComp6523Component', () => {
  let component: MyComp6523Component;
  let fixture: ComponentFixture<MyComp6523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
