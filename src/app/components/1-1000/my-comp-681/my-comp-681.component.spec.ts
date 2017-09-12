import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp681Component } from './my-comp-681.component';

describe('MyComp681Component', () => {
  let component: MyComp681Component;
  let fixture: ComponentFixture<MyComp681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
