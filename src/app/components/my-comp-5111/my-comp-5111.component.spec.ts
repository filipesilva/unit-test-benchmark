import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5111Component } from './my-comp-5111.component';

describe('MyComp5111Component', () => {
  let component: MyComp5111Component;
  let fixture: ComponentFixture<MyComp5111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
