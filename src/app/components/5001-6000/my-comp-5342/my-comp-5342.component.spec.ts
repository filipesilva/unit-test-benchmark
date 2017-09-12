import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5342Component } from './my-comp-5342.component';

describe('MyComp5342Component', () => {
  let component: MyComp5342Component;
  let fixture: ComponentFixture<MyComp5342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
