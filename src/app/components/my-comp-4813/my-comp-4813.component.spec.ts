import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4813Component } from './my-comp-4813.component';

describe('MyComp4813Component', () => {
  let component: MyComp4813Component;
  let fixture: ComponentFixture<MyComp4813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
