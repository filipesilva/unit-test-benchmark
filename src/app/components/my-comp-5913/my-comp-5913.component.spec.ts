import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5913Component } from './my-comp-5913.component';

describe('MyComp5913Component', () => {
  let component: MyComp5913Component;
  let fixture: ComponentFixture<MyComp5913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
