import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5316Component } from './my-comp-5316.component';

describe('MyComp5316Component', () => {
  let component: MyComp5316Component;
  let fixture: ComponentFixture<MyComp5316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
