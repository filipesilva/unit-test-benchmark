import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5166Component } from './my-comp-5166.component';

describe('MyComp5166Component', () => {
  let component: MyComp5166Component;
  let fixture: ComponentFixture<MyComp5166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
