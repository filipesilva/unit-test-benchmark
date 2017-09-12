import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8177Component } from './my-comp-8177.component';

describe('MyComp8177Component', () => {
  let component: MyComp8177Component;
  let fixture: ComponentFixture<MyComp8177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
