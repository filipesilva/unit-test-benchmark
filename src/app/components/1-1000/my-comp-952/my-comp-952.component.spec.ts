import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp952Component } from './my-comp-952.component';

describe('MyComp952Component', () => {
  let component: MyComp952Component;
  let fixture: ComponentFixture<MyComp952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
