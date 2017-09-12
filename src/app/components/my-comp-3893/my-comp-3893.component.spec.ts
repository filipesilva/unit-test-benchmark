import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3893Component } from './my-comp-3893.component';

describe('MyComp3893Component', () => {
  let component: MyComp3893Component;
  let fixture: ComponentFixture<MyComp3893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
