import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7713Component } from './my-comp-7713.component';

describe('MyComp7713Component', () => {
  let component: MyComp7713Component;
  let fixture: ComponentFixture<MyComp7713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
