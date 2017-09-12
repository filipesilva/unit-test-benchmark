import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8556Component } from './my-comp-8556.component';

describe('MyComp8556Component', () => {
  let component: MyComp8556Component;
  let fixture: ComponentFixture<MyComp8556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
