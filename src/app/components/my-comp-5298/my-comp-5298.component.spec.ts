import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5298Component } from './my-comp-5298.component';

describe('MyComp5298Component', () => {
  let component: MyComp5298Component;
  let fixture: ComponentFixture<MyComp5298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
