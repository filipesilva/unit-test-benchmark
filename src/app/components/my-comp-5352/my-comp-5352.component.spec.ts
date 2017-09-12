import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5352Component } from './my-comp-5352.component';

describe('MyComp5352Component', () => {
  let component: MyComp5352Component;
  let fixture: ComponentFixture<MyComp5352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
