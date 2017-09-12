import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp734Component } from './my-comp-734.component';

describe('MyComp734Component', () => {
  let component: MyComp734Component;
  let fixture: ComponentFixture<MyComp734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
