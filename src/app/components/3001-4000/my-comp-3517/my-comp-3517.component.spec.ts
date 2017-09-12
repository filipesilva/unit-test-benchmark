import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3517Component } from './my-comp-3517.component';

describe('MyComp3517Component', () => {
  let component: MyComp3517Component;
  let fixture: ComponentFixture<MyComp3517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
