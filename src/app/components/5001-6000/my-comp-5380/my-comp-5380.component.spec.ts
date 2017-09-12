import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5380Component } from './my-comp-5380.component';

describe('MyComp5380Component', () => {
  let component: MyComp5380Component;
  let fixture: ComponentFixture<MyComp5380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
