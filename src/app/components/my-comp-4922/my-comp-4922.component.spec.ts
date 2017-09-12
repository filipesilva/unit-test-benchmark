import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4922Component } from './my-comp-4922.component';

describe('MyComp4922Component', () => {
  let component: MyComp4922Component;
  let fixture: ComponentFixture<MyComp4922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
