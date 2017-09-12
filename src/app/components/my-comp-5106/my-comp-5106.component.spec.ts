import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5106Component } from './my-comp-5106.component';

describe('MyComp5106Component', () => {
  let component: MyComp5106Component;
  let fixture: ComponentFixture<MyComp5106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
