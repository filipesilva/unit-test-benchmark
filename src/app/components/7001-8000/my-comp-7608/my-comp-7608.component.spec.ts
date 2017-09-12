import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7608Component } from './my-comp-7608.component';

describe('MyComp7608Component', () => {
  let component: MyComp7608Component;
  let fixture: ComponentFixture<MyComp7608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
