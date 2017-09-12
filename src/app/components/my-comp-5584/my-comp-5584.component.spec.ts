import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5584Component } from './my-comp-5584.component';

describe('MyComp5584Component', () => {
  let component: MyComp5584Component;
  let fixture: ComponentFixture<MyComp5584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
