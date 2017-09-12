import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5260Component } from './my-comp-5260.component';

describe('MyComp5260Component', () => {
  let component: MyComp5260Component;
  let fixture: ComponentFixture<MyComp5260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
