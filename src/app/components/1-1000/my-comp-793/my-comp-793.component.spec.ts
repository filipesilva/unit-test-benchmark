import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp793Component } from './my-comp-793.component';

describe('MyComp793Component', () => {
  let component: MyComp793Component;
  let fixture: ComponentFixture<MyComp793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
