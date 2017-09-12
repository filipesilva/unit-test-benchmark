import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5863Component } from './my-comp-5863.component';

describe('MyComp5863Component', () => {
  let component: MyComp5863Component;
  let fixture: ComponentFixture<MyComp5863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
