import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5162Component } from './my-comp-5162.component';

describe('MyComp5162Component', () => {
  let component: MyComp5162Component;
  let fixture: ComponentFixture<MyComp5162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
