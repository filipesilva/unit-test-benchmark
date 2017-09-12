import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7316Component } from './my-comp-7316.component';

describe('MyComp7316Component', () => {
  let component: MyComp7316Component;
  let fixture: ComponentFixture<MyComp7316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
