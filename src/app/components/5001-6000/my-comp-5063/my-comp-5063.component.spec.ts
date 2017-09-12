import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5063Component } from './my-comp-5063.component';

describe('MyComp5063Component', () => {
  let component: MyComp5063Component;
  let fixture: ComponentFixture<MyComp5063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
