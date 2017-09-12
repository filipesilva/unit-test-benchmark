import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7789Component } from './my-comp-7789.component';

describe('MyComp7789Component', () => {
  let component: MyComp7789Component;
  let fixture: ComponentFixture<MyComp7789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
