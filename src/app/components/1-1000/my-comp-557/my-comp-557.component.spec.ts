import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp557Component } from './my-comp-557.component';

describe('MyComp557Component', () => {
  let component: MyComp557Component;
  let fixture: ComponentFixture<MyComp557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
