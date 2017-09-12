import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5713Component } from './my-comp-5713.component';

describe('MyComp5713Component', () => {
  let component: MyComp5713Component;
  let fixture: ComponentFixture<MyComp5713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
