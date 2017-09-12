import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp316Component } from './my-comp-316.component';

describe('MyComp316Component', () => {
  let component: MyComp316Component;
  let fixture: ComponentFixture<MyComp316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
