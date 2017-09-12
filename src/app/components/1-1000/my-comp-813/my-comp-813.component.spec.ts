import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp813Component } from './my-comp-813.component';

describe('MyComp813Component', () => {
  let component: MyComp813Component;
  let fixture: ComponentFixture<MyComp813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
