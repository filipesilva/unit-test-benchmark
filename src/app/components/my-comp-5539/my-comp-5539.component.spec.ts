import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5539Component } from './my-comp-5539.component';

describe('MyComp5539Component', () => {
  let component: MyComp5539Component;
  let fixture: ComponentFixture<MyComp5539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
