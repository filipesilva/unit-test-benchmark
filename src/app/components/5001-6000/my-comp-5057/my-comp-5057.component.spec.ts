import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5057Component } from './my-comp-5057.component';

describe('MyComp5057Component', () => {
  let component: MyComp5057Component;
  let fixture: ComponentFixture<MyComp5057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
