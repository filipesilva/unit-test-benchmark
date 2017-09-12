import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5159Component } from './my-comp-5159.component';

describe('MyComp5159Component', () => {
  let component: MyComp5159Component;
  let fixture: ComponentFixture<MyComp5159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
