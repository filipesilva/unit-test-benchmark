import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3265Component } from './my-comp-3265.component';

describe('MyComp3265Component', () => {
  let component: MyComp3265Component;
  let fixture: ComponentFixture<MyComp3265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
