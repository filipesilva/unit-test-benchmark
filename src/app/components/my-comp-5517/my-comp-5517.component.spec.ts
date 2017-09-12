import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5517Component } from './my-comp-5517.component';

describe('MyComp5517Component', () => {
  let component: MyComp5517Component;
  let fixture: ComponentFixture<MyComp5517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
