import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5414Component } from './my-comp-5414.component';

describe('MyComp5414Component', () => {
  let component: MyComp5414Component;
  let fixture: ComponentFixture<MyComp5414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
