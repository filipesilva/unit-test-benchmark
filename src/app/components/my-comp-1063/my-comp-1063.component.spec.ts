import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1063Component } from './my-comp-1063.component';

describe('MyComp1063Component', () => {
  let component: MyComp1063Component;
  let fixture: ComponentFixture<MyComp1063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
