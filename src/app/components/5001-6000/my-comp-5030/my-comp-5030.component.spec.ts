import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5030Component } from './my-comp-5030.component';

describe('MyComp5030Component', () => {
  let component: MyComp5030Component;
  let fixture: ComponentFixture<MyComp5030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
