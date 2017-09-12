import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8744Component } from './my-comp-8744.component';

describe('MyComp8744Component', () => {
  let component: MyComp8744Component;
  let fixture: ComponentFixture<MyComp8744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
