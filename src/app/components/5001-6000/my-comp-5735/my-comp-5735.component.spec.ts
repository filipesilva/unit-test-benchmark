import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5735Component } from './my-comp-5735.component';

describe('MyComp5735Component', () => {
  let component: MyComp5735Component;
  let fixture: ComponentFixture<MyComp5735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
