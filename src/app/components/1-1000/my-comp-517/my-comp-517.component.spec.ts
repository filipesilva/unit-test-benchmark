import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp517Component } from './my-comp-517.component';

describe('MyComp517Component', () => {
  let component: MyComp517Component;
  let fixture: ComponentFixture<MyComp517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
