import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9030Component } from './my-comp-9030.component';

describe('MyComp9030Component', () => {
  let component: MyComp9030Component;
  let fixture: ComponentFixture<MyComp9030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
