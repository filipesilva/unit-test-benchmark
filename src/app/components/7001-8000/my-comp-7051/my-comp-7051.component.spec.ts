import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7051Component } from './my-comp-7051.component';

describe('MyComp7051Component', () => {
  let component: MyComp7051Component;
  let fixture: ComponentFixture<MyComp7051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
