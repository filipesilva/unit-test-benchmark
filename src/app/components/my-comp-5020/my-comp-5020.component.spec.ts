import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5020Component } from './my-comp-5020.component';

describe('MyComp5020Component', () => {
  let component: MyComp5020Component;
  let fixture: ComponentFixture<MyComp5020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
