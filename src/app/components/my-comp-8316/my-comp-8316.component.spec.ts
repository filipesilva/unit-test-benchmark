import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8316Component } from './my-comp-8316.component';

describe('MyComp8316Component', () => {
  let component: MyComp8316Component;
  let fixture: ComponentFixture<MyComp8316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
