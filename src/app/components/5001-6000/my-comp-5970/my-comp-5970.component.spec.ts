import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5970Component } from './my-comp-5970.component';

describe('MyComp5970Component', () => {
  let component: MyComp5970Component;
  let fixture: ComponentFixture<MyComp5970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
